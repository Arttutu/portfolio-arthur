export default function ClientOnly({ children }) {
  return typeof window !== "undefined" ? children : null;
}
