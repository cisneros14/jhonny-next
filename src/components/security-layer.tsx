"use client";

import { useEffect } from "react";

export function SecurityLayer({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Bloquear click derecho
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // Bloquear combinaciones de teclado comunes para guardar/ver código
    const handleKeyDown = (e: KeyboardEvent) => {
      // Bloquear Ctrl+U (Ver código fuente)
      if (e.ctrlKey && e.key === "u") e.preventDefault();
      if (e.metaKey && e.key === "u") e.preventDefault();

      // Bloquear Ctrl+S (Guardar página)
      if (e.ctrlKey && e.key === "s") e.preventDefault();
      if (e.metaKey && e.key === "s") e.preventDefault();

      // Bloquear F12 / Inspect
      if (e.key === "F12") e.preventDefault();
      if (e.ctrlKey && e.shiftKey && e.key === "I") e.preventDefault();
      if (e.metaKey && e.shiftKey && e.key === "I") e.preventDefault();
    };

    // Bloquear drag de imágenes (adicional a CSS)
    const handleDragStart = (e: DragEvent) => {
      if ((e.target as HTMLElement).tagName === "IMG") {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("dragstart", handleDragStart);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("dragstart", handleDragStart);
    };
  }, []);

  return <>{children}</>;
}
