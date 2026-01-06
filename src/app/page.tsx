import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/CardDestino.module.css";
import commentStyles from "@/styles/ComentarioCard.module.css";
import ComentarioCard from "@/components/ComentarioCard"; 

// SEO metadata
export const metadata = {
  title: "Portal de Viagens - Home",
  description: "Bem-vindo ao Portal de Viagens. Descubra destinos incríveis pelo mundo!"
};

export default function HomePage() {
  return (
    <main>
      {/* Banner principal com prioridade alta */}
      <div style={{ position: "relative", width: "100%", height: 420 }}>
        <Image
          src="/banner.webp"
          alt="Banner Portal de Viagens"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Bloco de boas-vindas */}
      <section className={styles.welcome}>
        <h2>Bem-vindo ao Portal de Viagens</h2>
        <p>Descubra destinos incríveis pelo mundo!</p>
        <Link href="/destinos" className={styles.btn}>
          Ver destinos
        </Link>
      </section>

      {/* Comentários */}
      <section className={commentStyles.comments}>
        <ComentarioCard comentario="Adorei viajar para Paris com este portal!" autor="Maria" />
        <ComentarioCard comentario="O site é muito fácil de usar e me ajudou a planejar minha viagem." autor="João" />
        <ComentarioCard comentario="Recomendo para todos que querem conhecer novos destinos." autor="Ana" />
      </section>
    </main>
  );
}
