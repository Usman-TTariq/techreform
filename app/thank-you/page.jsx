import Script from "next/script";
import Header from "../components/header";
import ThankYouSection from "../components/thank-you-section";
import OpenAiLeadConversion from "../components/openai-lead-conversion";

const ThankYou = () => {
    return (
        <div>
            <Script id="conversion-tracking" strategy="afterInteractive">
                {`gtag('event', 'conversion', {'send_to': 'AW-16723277657/kSKGCJvW74McENnuo6Y-'});`}
            </Script>
            <OpenAiLeadConversion />
            <Header />
            <ThankYouSection />
        </div>
    )
}

export default ThankYou;
