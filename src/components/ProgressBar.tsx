interface ProgressBarProps{
    progress: number
}

export function ProgressBar(props: ProgressBarProps) {
    return (
        // {/* criando a barra de progresso */}
        <div className="h-3 rounded-xl bg-zinc-700 w-full mt-4">
            <div 
                role="progressbar"
                aria-label="Progresso de hábitos completados nesse dia"
                // aria-valuenow={75}
                aria-valuenow={props.progress}
                className="h-3 rounded-xl bg-violet-600"
                style={{
                    width: `${props.progress}%`
                }}
            />
        </div>        
    )
}