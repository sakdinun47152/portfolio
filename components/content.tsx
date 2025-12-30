export default function Content({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
    return (
        <main className="flex-grow flex flex-row justify-evenly items-center w-full pb-3 overflow-x-hidden overflow-y-overlay"> 
            {children}           
        </main>
    );
}