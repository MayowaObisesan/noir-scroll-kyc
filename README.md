# Iris Identity (Iris-I)

Welcome to Iris Identity! Iris Identity (Iris-I) is a zk Verifiable Credential (VC) system that allows users to upload and verify their identity and documents in compliance with most jurisdiction's KYC requirements. It also serves as a Decentralized Identity (DID) provider where individuals create, store, and manage digital identities in a secure and privacy-focused system.

This dapp was developed as a project for the Scroll Vortex hackathon.

## Motivation

Have you ever attempted to sign up to a platform that required KYC but the KYC verification service had so many issues while trying to take your details and documents? Or are you tired of having to twist, or turn, or rotate your head? Or open your mouth, close it, tongue out? All of those frustrating attempts at just trying to prove that you are a human being. Now, imagine you could do all of that just once, yes, just once and everywhere that it is requested, you just submit the proof without having to submit your identity documents or do a liveness check everytime. Iris Identity is a verifiable credential (VC) system that provides zk decentralised identities (DID) for users (Identity Holders) in a trust-less, decentralised and verifiable manner.

### Features

1. **Account Creation and Profile Set-Up:** Users create their accounts using their supported Ethereum wallet of choice, for example, Metamask, Coinbase, etc, this gives them access to interacting on the platform.
2. **Completing Biometric and Document Verification:** After users create their accounts, they now can complete their documents and liveness verification and generate a zk proof of their identity.

*Note: At the stage of this submission, all of these features are in their most basic form, the development team has _ideas and _a _roadmap__ to building_ a more robust platform with more features that extend the ability of Iris-I _as well _as _improve__ general and_ overall user experience.*

## Technology Stack

- **NOIR ZK Circuits:** The project utilises NOIR, a domain-specific language for writing zero-knowledge circuits, to define the cryptographic operations needed for generating and verifying proofs. You can find the circuits in the Circuits folder in the Github repo
- **Persona:** Persona is a globally reputable identity verifier, we used their api to verify that the identity documents and liveness check were submitted to Iris-I.
- **Solidity and Smart Contracts:** Deployed to the Scroll Sepolia testnet.
- **Frontend**: The entire frontend is developed with Vite-React. All assets, including fonts, images, and sprites for animations, are sourced from the internet.

## Links:

- **Figma:** https://www.figma.com/file/r08NvIUEG8RnejNhWGot4U/Untitled?type=design&node-id=0%3A1&mode=design&t=gTmGPimdTsOD0pw6-1
- **Deployed and Verified Contract:** https://sepolia.scrollscan.com/address/0x72f29e57d14b30eeea2e3defb730b0385a7584fe

## Getting Started

To run the application, you can follow the live vercel link, [here](https://noir-scroll-kyc.vercel.app/)

If you want to run it locally, clone this repo and run `yarn dev` to get started.

Upon getting started, follow these steps:
- On the homepage, click on `Enter App`
- Click on `Connect Wallet`: Connect an Ethereum Wallet on the Scroll Sepolia testnet.
- At the top right corner, click on `Start KYC Verification`, this will pop a modal for you to submit a valid means of identification as officially issued by the government of your country.
- Complete the test of humanity liveness check, follow the prompts provided by the verification modal.
- Wait for the identity document and selfie you submitted to be verified, this should take less than 1 minute.
- It will then also prompt you to sign for onchain verification.
- With onchain verification successful, you will receive a KYC hash to confirm that your identity has been verified.

So, drum-rolls please🥁, welcome to the future of onchain decentralized identities (DID) powered by a convenient and friendly user interface that gives priority for optimal and easy onchain experience!

---

*Note: This project is intended for educational and proof-of-concept purposes. Please use ERC-20 tokens responsibly and adhere to any relevant blockchain regulations.*

---

## Noir Starters

To get started with writing zero-knowledge circuits with [Noir](https://noir-lang.org/).

Each project is an example you can use as template. Feel free to mix them in to find the best combination of technology that suits your needs.

## Getting started

If you have [node](https://nodejs.org/en/download) installed, just open a terminal and run:

```bash
npx create-noir
```

### Templates

- Foundry: [`./with-foundry`](./with-foundry)
- Vite + Hardhat: [`./vite-hardhat`](./vite-hardhat)

## Example Projects

You can view more complete example projects written in Noir in the [Noir Examples](https://github.com/noir-lang/noir-examples) repo.

## Support

Need help? Join the [Noir Discord](https://discord.gg/JtqzkdeQ6G) or reach out on [Twitter](https://twitter.com/NoirLang).

## Contributing

We welcome contributions! Check out the [contributing guidelines](./CONTRIBUTING.md) for more info.
