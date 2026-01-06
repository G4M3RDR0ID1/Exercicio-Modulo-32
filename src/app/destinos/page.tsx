import CardDestino from "@/components/CardDestino";
import { destinos } from "@/data/destinos";

export const metadata = {
  title: "Portal de Viagens - Destinos",
  description:
    "Explore nossa seleção de destinos turísticos pelo mundo e descubra lugares incríveis para visitar.",
};

export default function DestinosPage() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: "20px",
        alignItems: "start",
      }}
    >
      {destinos.map((destino, index) => (
        <CardDestino key={destino.id} destino={destino} isLcp={index === 0} />
      ))}
    </div>
  );
}
