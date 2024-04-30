import Header from "./Landing/components/Header";

const About = () => {
    return (
        <div>
            <Header coloured="about"/>
            <div className="w-[75%] m-auto text-xl flex flex-col gap-5 mb-10">
                <p>Iris Identity (Iris-I) is a zk Verifiable Credential (VC) system that allows users to upload and verify their identity and documents in compliance with most jurisdiction's KYC requirements. Verifying their identities on Iris-I allows users to generate zk proofs of their identities that they can submit and use on services that use Iris-I as a documents and identity verification tool.</p>
                <p>Iris-I develops on decentralised identities (DID) where it allows users the flexibilty of not having to identify themselves repeatedly on every new platform that they sign up to. They can just simply ensure that their proof is valid while keeping their details and identity to themselves.</p>
                <p>Trust is a core component of this system, just because a zero-knowledge proof is valid, it does not mean that it is true. Since anyone can send VCs, the DID of where those VCs are issued from: Iris-I, must be a reputable trusted source by the Verifier.</p>
                <p>Iris-I creates a triangle which is made up of stakeholders: the identity holder, the issuer, and the verifier. The IDENTITY HOLDER holds verifiable credentials (VCs) and generates zero-knowledge proof. The ISSUER (we: Iris-I) sends VCs to the Identity Holder in form of KYC hash. And a VERIFIER (which can be on-chain or off-chain) verifies the validity of the zero-knowledge proof and uses it in their business.</p>
                <p>Iris-I incorporates and uses the services of Persona to verify the identity documents and liveness check submitted to Iris-I's verification system, upon successfully completing the verification from Persona, Iris-I will generate a zk proof of that process and bind it to the user. Allowing the identity holder to be able to verify their identity in a private and secure manner.</p>
            </div>
        </div>
    )
}

export default About;