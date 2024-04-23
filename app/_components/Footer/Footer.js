function Footer() {
  const date = new Date();
  return (
    <footer className="footer">
      <p>Made by Adam Tarpey {date.getFullYear()}</p>
    </footer>
  );
}

export default Footer;
