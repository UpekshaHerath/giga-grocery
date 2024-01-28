export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {

    return (
        <section className="flex-col align-middle justify-center">{children}</section>
    );

}
