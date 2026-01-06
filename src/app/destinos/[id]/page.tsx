import Image from "next/image";
import { destinos } from "@/data/destinos";

//  SEO dinâmico
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const destino = destinos.find((d) => d.id === id);

  if (!destino) {
    return {
      title: "Destino não encontrado - Portal de Viagens",
      description: "O destino solicitado não foi encontrado no Portal de Viagens."
    };
  }

  return {
    title: `Portal de Viagens - ${destino.nome}`,
    description: destino.descricao
  };
}

export default async function DestinoPage({ params }: { params: Promise<{ id: string }> }) {
  // Desestrutura o id de forma assíncrona
  const { id } = await params;

  const destino = destinos.find((d) => d.id === id);

  if (!destino) {
    return (
      <div style={{ padding: 20 }}>
        <h3>Destino não encontrado</h3>
        <pre>
          {JSON.stringify(
            {
              recebido: id,
              disponiveis: destinos.map((d) => d.id),
            },
            null,
            2
          )}
        </pre>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2 style={{ marginBottom: 16 }}>{destino.nome}</h2>
      <Image
        src={destino.imagem}
        alt={destino.nome}
        width={1200}
        height={800}
        priority
        sizes="(max-width: 768px) 100vw, 1200px"
        style={{ width: "100%", height: "auto", borderRadius: 8 }}
      />
      <p style={{ marginTop: 20, fontSize: "1.1rem", color: "#555" }}>{destino.descricao}</p>
    </div>
  );
}
