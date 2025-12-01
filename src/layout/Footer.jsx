export default function Footer() {
  return (
    <footer className="mt-auto py-6 bg-(--color-green-dark) text-white">
      <div className="max-w-5xl mx-auto text-center">
        <p className="opacity-80 tracking-wide">
          © {new Date().getFullYear()} MyDiary — Every day is a new page.
        </p>
      </div>
    </footer>
  );
}
