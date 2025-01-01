// Los error boundaries no reconocen los fetch
// Detecta errores de renderización
// Detecta errores de ciclo de vida
// Detecta errores de eventos
// Detecta errores de promesas
// Detecta errores de navegación
// Detecta errores de enrutamiento
// Detecta errores de redireccionamiento
// Detecta errores de renderizado en el servidor
// Detecta errores de renderizado en el cliente

// Se coloca en el main tsx para que envuelva a toda la app
import React, { ReactNode, ErrorInfo } from "react";

interface ErrorBoundaryState {
  hasError: boolean;
}

interface ErrorBoundaryProps {
  children: ReactNode;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Depurar para ver si entran aqui los errores forzados
    console.error("Derived Error", error);
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Oops! Something went wrong</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
