import { useState } from 'react';
import React from 'react';
import Persona from 'persona';

import { useOnChainVerification } from '../hooks/useOnChainVerification.jsx';
import { useProofGeneration } from '../hooks/useProofGeneration.jsx';
import { useOffChainVerification } from '../hooks/useOffChainVerification.jsx';
import { initializeCommitment } from '../utils/generateCommit.js';
import {
  bytesToBigInt,
  bytesToHex,
  bytesToNumber,
  bytesToString,
  hexToBigInt,
  hexToNumber,
  numberToHex,
  toHex,
} from 'viem';

function Component() {
  // const [input, setInput] = useState<{ x: string; y: string } | undefined>();
  const [input, setInput] = useState<
    { name: string; nationality: string; kyc_id: string; kyc_hash: string } | undefined
  >();

  const [fields, setFields] = useState<any>();
  const [showKycHash, setShowKycHash] = useState<string>();
  const { noir, proofData } = useProofGeneration(input);
  useOffChainVerification(noir, proofData);
  useOnChainVerification(proofData);

  function toHexString(byteArray) {
    return Array.from(byteArray, function (byte) {
      return ('0' + (byte & 0xff).toString(16)).slice(-2);
    }).join('');
  }

  const convertToByte = (val: string) => {
    const utf8Encoder = new TextEncoder();
    const byteArray = utf8Encoder.encode(val as unknown as string);
    console.log('fullname hash', byteArray);
    return byteArray;
  };

  function encodeToHex(str: string) {
    return str
      .split('')
      .map(c => c.charCodeAt(0).toString(16).padStart(2, '0'))
      .join('');
  }

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const elements = e.currentTarget.elements;
    if (!elements) return;

    // const x = elements.namedItem('x') as HTMLInputElement;
    // const y = elements.namedItem('y') as HTMLInputElement;

    const fullname = elements.namedItem('fullname') as HTMLInputElement;
    const nationality = elements.namedItem('nationality') as HTMLInputElement;
    const kycId = elements.namedItem('kycId') as HTMLInputElement;
    const kycHash = elements.namedItem('kycHash') as HTMLInputElement;
    // const kycHash = initializeCommitment([fullname, nationality, kycId]);

    // 'byteArray' is a Uint8Array containing the encoded bytes

    // setInput({ x: x.value, y: y.value });
    const fullnameBytes = convertToByte(fullname.value);
    const nationalityBytes = convertToByte(nationality.value);
    const kycIdBytes = convertToByte(kycId.value.replace('inq_', ''));
    const fullnameBytesInt = BigInt(fullnameBytes.toString().replaceAll(',', ''));
    const nationalityBytesInt = BigInt(nationalityBytes.toString().replaceAll(',', ''));
    const kycIdBytesInt = BigInt(kycIdBytes.toString().replaceAll(',', ''));
    console.log(fullnameBytesInt, nationalityBytesInt, kycIdBytesInt);
    console.log(toHexString(fullnameBytes));
    console.log(bytesToHex(fullnameBytes));
    console.log(hexToNumber(`${bytesToHex(fullnameBytes)}`));
    console.log(hexToBigInt(`${bytesToHex(fullnameBytes)}`));
    const kh = await initializeCommitment([
      bytesToBigInt(fullnameBytes),
      bytesToBigInt(nationalityBytes),
      bytesToBigInt(kycIdBytes),
    ]);
    console.log(kh);
    console.log(bytesToHex(kh.value));
    console.log(bytesToHex(fullnameBytes), bytesToHex(nationalityBytes), bytesToHex(kycIdBytes));
    console.log(typeof bytesToHex(fullnameBytes));
    // console.log(typeof kycHash.value, kycHash.value, bytesToHex(convertToByte(kycHash.value)));
    // console.log(Number(kh.value));
    // console.log(numberToHex(Number(kh.value)));
    setInput({
      name: bytesToHex(fullnameBytes),
      nationality: bytesToHex(nationalityBytes),
      kyc_id: bytesToHex(kycIdBytes),
      kyc_hash: kycHash.value,
    });
  };

  const client = new Persona.Client({
    templateId: 'itmpl_B8FVEydG1u8wSPKNyVpP7UiWjNq4',
    environmentId: 'env_N8QZ2aMacnquXVsm1pmRWwz2xSFa',
    onComplete: async ({ inquiryId, status, fields }) => {
      // Inquiry completed. Optionally tell your server about it.
      console.log(`Sending finished inquiry ${inquiryId} to backend`);
      console.log(fields);
      const fullnameBytes = convertToByte(
        fields['name-first'].value + '' + fields['name-last'].value,
      );
      const nationalityBytes = convertToByte(fields['birthdate'].value);
      const kycIdBytes = convertToByte(inquiryId.replace('inq_', ''));
      const fullnameBytesInt = BigInt(fullnameBytes.toString().replaceAll(',', ''));
      const nationalityBytesInt = BigInt(nationalityBytes.toString().replaceAll(',', ''));
      const kycIdBytesInt = BigInt(kycIdBytes.toString().replaceAll(',', ''));
      console.log(fullnameBytesInt, nationalityBytesInt, kycIdBytesInt);
      console.log(toHexString(fullnameBytes));
      console.log(bytesToHex(fullnameBytes));
      console.log(hexToNumber(`${bytesToHex(fullnameBytes)}`));
      console.log(hexToBigInt(`${bytesToHex(fullnameBytes)}`));
      const kh = await initializeCommitment([
        bytesToBigInt(fullnameBytes),
        bytesToBigInt(nationalityBytes),
        bytesToBigInt(kycIdBytes),
      ]);
      console.log(kh);
      console.log(bytesToNumber(kh.value), kh.toString());
      console.log(bytesToBigInt(kh.value));
      setShowKycHash(kh.toString());
    },
  });

  function openClient() {
    client.open();
  }
  function cancelClient() {
    client.cancel(true);
  }

  return (
    <div className="">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Iris</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <button className="btn" onClick={() => openClient()}>
                Start KYC Verification
              </button>
            </li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2 bg-base-100 rounded-t-none">
                  <li>
                    <a>Link 1</a>
                  </li>
                  <li>
                    <a>Link 2</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
      {/* <button className="btn" onClick={() => openClient()}>
        Start KYC Verification
      </button> */}
      <form className="container flex flex-col gap-y-8" onSubmit={submit}>
        <div className="p-8">
          <h1 className="text-4xl">Verify your Information using ZK</h1>
          <h2>Pass in your data</h2>
        </div>
        {/* <p>Try it!</p> */}
        {/* <input name="x" type="text" />
      <input name="y" type="text" /> */}
        {showKycHash && (
          <div className="alert alert-warning flex flex-col">
            Kindly keep this private. It will be required to verify your details on different
            platforms
            <div className="font-bold">{showKycHash}</div>
          </div>
        )}
        <div className="form-control gap-y-8 px-8">
          <div>
            <label htmlFor="" className="flex flex-col">
              Id
              <input
                name="kycId"
                type="text"
                className="input input-lg input-bordered"
                placeholder="Your ID"
              />
            </label>
          </div>

          <div>
            <label htmlFor="" className="flex flex-col">
              Fullname
              <input
                name="fullname"
                type="text"
                className="input input-lg input-bordered"
                placeholder="Your fullname"
              />
            </label>
          </div>

          <div>
            <label htmlFor="" className="flex flex-col">
              Nationality
              <select name="nationality" className="select select-lg w-full">
                <option disabled selected>
                  Select your country
                </option>
                <option value="ng">Nigeria</option>
                <option value="us">United states</option>
                <option value="fr">France</option>
                <option value="ru">Russia</option>
                <option value="ch">China</option>
              </select>
            </label>
          </div>

          <div>
            <label htmlFor="" className="flex flex-col">
              Your KYC hash
              <input
                name="kycHash"
                type="text"
                className="input input-lg input-bordered"
                placeholder="Your secret hash"
              />
            </label>
          </div>
          <button className="btn btn-primary" type="submit">
            Calculate proof
          </button>
        </div>
      </form>
    </div>
  );
}

export default Component;
