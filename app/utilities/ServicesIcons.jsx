import Image from "next/image";

export default function ServicesIcons() {
    return (
        <div className="flex whitespace-nowrap justify-between items-center gap-2 flex-wrap">
            <div className="lg:w-[196px] flex-col flex-1 flex items-center gap-1">
                <Image
                    src="/alarmklokke.svg"
                    width={64}
                    height={64}
                    alt="Tjenester"
                    className="w-6 h-6 sm:w-9 sm:h-9"
                />
                <span className="tiny_text">Ukentlig check-in</span>
            </div>
            <div className="lg:w-[196px] flex-col flex-1 flex items-center gap-1">
                <Image
                    src="/Calculator.svg"
                    width={64}
                    height={64}
                    alt="Tjenester"
                    className="w-6 h-6 sm:w-9 sm:h-9"
                />
                <span className="tiny_text">Tilgang til app</span>
            </div>
            <div className="lg:w-[196px] flex-col flex-1 flex items-center gap-1">
                <Image
                    src="/PersonBoundingBox.svg"
                    width={64}
                    height={64}
                    alt="Tjenester"
                    className="w-6 h-6 sm:w-9 sm:h-9"
                />
                <span className="tiny_text">Skreddersydde planer</span>
            </div>
            <div className="lg:w-[196px] flex-col flex-1 flex items-center gap-1">
                <Image
                    src="/ChatQuoteFill.svg"
                    width={64}
                    height={64}
                    alt="Tjenester"
                    className="w-6 h-6 sm:w-9 sm:h-9"
                />
                <span className="tiny_text">24/7 chat</span>
            </div>
            <div className="lg:w-[196px] flex-col flex-1 flex items-center gap-1">
                <Image
                    src="/personTextToRight.svg"
                    width={64}
                    height={64}
                    alt="Tjenester"
                    className="w-6 h-6 sm:w-9 sm:h-9"
                />
                <span className="tiny_text">Tett Oppfølging</span>
            </div>
        </div>
    );
}
