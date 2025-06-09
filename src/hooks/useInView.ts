import { useEffect, useRef, useState, type Ref } from "react";

interface UseInView {
    ref: Ref<HTMLDivElement | null>;
    isVisible: boolean;
}

export function useInView(threshold = 0.1): UseInView {

    const ref = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
       
        const observer = new IntersectionObserver(
            ([entry]) => {
                if(entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold }
        );

        if(ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if(ref.current) {
                observer.unobserve(ref.current);
            }
        };

    }, []);

    return { ref, isVisible };

}