import styles from "@/styles/ComentarioCard.module.css";

interface ComentarioCardProps {
  comentario: string;
  autor: string;
}

export default function ComentarioCard({ comentario, autor }: ComentarioCardProps) {
  return (
    <div className={styles.commentCard}>
      <p>{comentario}</p>
      <span>{autor}</span>
    </div>
  );
}
