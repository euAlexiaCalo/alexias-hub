/* Para ser usado em outros componentes. */
import { useInView } from "react-intersection-observer"; /* Para detectar quando o componente entra na tela */

// Cria uma função hock.
export const useScrollAnimation = () => {
    /* 'ref' é o elemento que vai ser observado, 'inView' diz se ele entrou na tela */
    const { ref, inView } = useInView({
        threshold: 0.2, // Define o quanto do componente precisa estar visivel (20%)
        triggerOnce: true
    });

    return { ref, inView };
};