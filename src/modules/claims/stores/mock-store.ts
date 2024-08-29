import { create } from 'zustand'
import { Claim } from '../dto/claim.dto'

interface ClaimStore {
  getClaimById: (id?: number) => Claim | undefined
  updateClaimsData: (claim: Claim) => void
  removeClaimsData: (id?: number) => void
  setClaimsData: (claim: Claim) => void
  claimsData: Claim[]
}

export const useClaimsStore = create<ClaimStore>((set) => ({
  claimsData: [
    {
      id: 1,
      title: 'title',
      observation: 'observation',
      neighborhood: 'neighborhood',
    },
  ],
  setClaimsData: (claim: Claim) =>
    set((state) => ({
      claimsData: [...state.claimsData, claim],
    })),
  removeClaimsData: (id?: number) =>
    set((state) => ({
      claimsData: state.claimsData.filter((claim) => claim.id !== id),
    })),
  updateClaimsData: (claim: Claim) =>
    set((state) => ({
      claimsData: state.claimsData.map((c) => (c.id === claim.id ? claim : c)),
    })),
  getClaimById: (id?: number): Claim | undefined => {
    return useClaimsStore.getState().claimsData.find((claim) => claim.id === id)
  },
}))
