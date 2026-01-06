import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/CardDestino.module.css";

interface Destino {
  id: string;
  nome: string;
  descricao: string;
  imagem: string;
}

export default function CardDestino({
  destino,
  isLcp = false,
}: {
  destino: Destino;
  isLcp?: boolean;
}) {
  return (
    <section className={styles.hero}>
      <Image
        src={destino.imagem}
        alt={destino.nome}
        width={800}
        height={400}
        className={styles.heroImage}
        sizes="100vw"
        quality={60}
        priority={isLcp}           // pré-carrega e evita lazy
        fetchPriority={isLcp ? "high" : "auto"} 
        decoding="async"
      />
      <div className={styles.welcome}>
        <h2>{destino.nome}</h2>
        <p>{destino.descricao}</p>
        <Link href={`/destinos/${encodeURIComponent(destino.id)}`} className={styles.btn}>
          Ver mais
        </Link>
      </div>
    </section>
  );
}
