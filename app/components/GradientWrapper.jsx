const GradientWrapper = ({ children, ...props }) => (
    <div
        {...props}
        className={`relative overflow-hidden py-16 sm:py-20 ${props.className || ""}`}>
        <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] opacity-40 blur-[120px] bg-gradient-to-tr from-primary/10 via-blue-400/5 to-transparent rounded-full"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 blur-[100px] rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 blur-[100px] rounded-full"></div>
        </div>
        <div className="relative">
            {children}
        </div>
    </div>
)

export default GradientWrapper