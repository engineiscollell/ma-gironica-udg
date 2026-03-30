const Footer = () => (
  <footer className="border-t py-8">
    <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <p className="font-display font-semibold text-foreground">Mà Girònica</p>
      <p>© {new Date().getFullYear()} Universitat de Girona.</p>
    </div>
  </footer>
);

export default Footer;
