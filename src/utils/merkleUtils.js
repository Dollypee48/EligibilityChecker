import { MerkleTree } from "merkletreejs";
import { keccak256 } from "ethers"; 
import eligibleAddresses from "../data/eligibleAddresses";

export function generateMerkleTree() {
  const leaves = eligibleAddresses.map((entry) =>
    keccak256(entry.address.toLowerCase())
  );
  const tree = new MerkleTree(leaves, keccak256, { sortPairs: true });
  const root = tree.getHexRoot();
  return { tree, root };
}

export function checkEligibility(address) {
  const { tree } = generateMerkleTree();
  const leaf = keccak256(address.toLowerCase());
  const proof = tree.getHexProof(leaf);
  const isValid = tree.verify(proof, leaf, tree.getHexRoot());

  if (isValid) {
    const record = eligibleAddresses.find(
      (entry) => entry.address.toLowerCase() === address.toLowerCase()
    );
    return { eligible: true, amount: record?.token || 0 };
  }

  return { eligible: false };
}
