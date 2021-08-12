import React from 'react'
import "./style.scss"
import SectionHeader from '../SectionHeader'

function Footer() {
    return (
        <section className="footer" data-scroll-section>
            <SectionHeader title="Made in" />
            <h1 className="location" id="location-text">
                Nikita Gaydenko
            </h1>
        </section>
    )
}

export default Footer
