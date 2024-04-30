'use client';

import { ProofData } from '@noir-lang/types';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { BarretenbergBackend } from '@noir-lang/backend_barretenberg';
import { Noir } from '@noir-lang/noir_js';

export function useChainVerification(noir?: Noir, proofData?: ProofData) {
  useEffect(() => {
    if (!proofData || !noir) return;

    toast.promise(noir.verifyProof(proofData), {
      pending: 'Verifying proof',
      success: 'Proof verified',
      error: 'Error verifying proof',
    });
  }, [proofData]);
}
