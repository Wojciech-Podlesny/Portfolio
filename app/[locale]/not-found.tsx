import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const NotFound = () => {
    const t = useTranslations("notFound");

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-center p-8">
            <h1 className="text-[2.5rem] text-white mb-6">
                {t("title")}
            </h1>
            <Link
                href="/"
                className="text-xl text-white no-underline border-b-2 border-transparent transition hover:border-blue-500 hover:text-gray-400"
            >
                ← {t("backHome")}
            </Link>
        </div>
    );
};

export default NotFound;
