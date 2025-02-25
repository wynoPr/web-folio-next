import { getOneData } from "@/api/getData";
import { Footer } from "@/components/footer/Footer";
import { WorkViewer } from "@/components/workViewer/WorkViewer";



interface LayoutIDProps {
    children: React.ReactNode;
    params: Promise<{ id: string }>;
}


export default async function WorkIdLayout({ children, params }: LayoutIDProps) {
    const resolvedParams = await params;
    const id = resolvedParams.id.toString();

    const data = await getOneData(id)
        return (
            <>
                <div className="master">
                    {children}
                    <Footer />
                </div>
                <WorkViewer data={data}  />
            </>
        );
}