import { useEffect, useRef, useState, type Ref } from "react";

interface UseInView {
    ref: Ref<HTMLDivElement | null>;
    isVisible: boolean;
}

export function useInView(): UseInView {

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
            { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
        );

        if(ref.current) {
            setTimeout(() => {
                observer.observe(ref.current!);
            }, 100);
        }

        return () => {
            observer.disconnect();
        };

    }, []);

    return { ref, isVisible };

}