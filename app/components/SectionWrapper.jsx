const SectionWrapper = ({ children, ...props }) => (
    <section {...props} className={`py-12 ${props.className || ""}`}>
        {children}
    </section>
)

export default SectionWrapper