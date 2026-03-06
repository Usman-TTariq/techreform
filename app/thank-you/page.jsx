import Script from "next/script";
import Header from "../components/header";
import ThankYouSection from "../components/thank-you-section";

const ThankYou = () => {
    return (
        <div>
            <Script id="conversion-tracking" strategy="afterInteractive">
                {`gtag('event', 'conversion', {'send_to': 'AW-16723277657/kSKGCJvW74McENnuo6Y-'});`}
            </Script>
            <Header />
            <ThankYouSection />
        </div>
    )
}

export default ThankYou;
