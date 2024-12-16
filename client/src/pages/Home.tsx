const Home = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Bienvenue sur mon Portfolio</h1>
        <p style={styles.subtitle}>Découvrez mes projets et mon parcours</p>
      </header>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column" as const,
    height: "100vh",
    backgroundColor: "#121212", // Fond sombre
    color: "#ffffff",
    textAlign: "center" as const,
  },
  header: {
    marginBottom: "20px",
  },
  title: {
    fontSize: "3rem",
    fontWeight: "bold" as const,
  },
  subtitle: {
    fontSize: "1.5rem",
    fontWeight: "300" as const,
  },
};

export default Home;
