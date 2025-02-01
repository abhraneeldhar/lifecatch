import styles from "./subscribe.module.css"

export default function SubscribePage() {
    return (<>
        <div className={styles.main}>
            <div className={styles.nav}>Lifecatch store</div>
            <div className={styles.storeArea}>
                <div className={styles.imageArea}>
                    <div className={styles.imagesTab}></div>
                    <div className={styles.bigImage}></div>
                </div>
                <div className={styles.detailsArea}>
                    <h1>Wearable full body jacket</h1>
                    <p>Introducing the Smart Airbag Jacket, a cutting-edge safety innovation designed to provide instant protection in case of falls or accidents. Engineered with advanced motion sensors, this high-tech jacket detects sudden impacts and inflates within milliseconds, creating a protective air cushion around your torso, neck, and spine to minimize injury.
                    </p>
                    <ul>
                        <li>✅ Intelligent Fall Detection – Uses precision motion sensors to instantly detect falls and activate the airbag.
                        </li>
                        <li>✅ Ultra-Fast Inflation – Deploys in milliseconds to shield vital areas from impact.
                        </li>
                        <li>✅ Lightweight & Stylish – Designed for everyday wear with breathable, durable materials.
                        </li>
                        <li>✅ Rechargeable & Reusable – Simply replace the CO₂ cartridge to reset after deployment.
                        </li>
                        <li>✅ Weather-Resistant – Built to withstand different climates, keeping you safe in all conditions.</li>
                    </ul>
                </div>
            </div>
        </div>
    </>)
}