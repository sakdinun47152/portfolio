import Footer from "../components/footer";

export default function Content({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
    return (
        <main
          className="
            flex
            flex-col
            w-full
            h-screen
            overflow-x-hidden
            overflow-y-scroll
          "
        >
          <div
            className="
              flex
              flex-row
              justify-evenly
              items-start
              pt-24
            "
          >
            {children}
          </div>
          <Footer />
        </main>
    );
}