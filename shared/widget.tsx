import { Layout } from "./panel-widgets"

export const Widget = ({image, widgetKey, text, setLayout, layout}: {
    widgetKey: number,
    image?: React.ReactNode, 
    text: string, 
    layout: Layout[],
    setLayout: (layout: Layout[]) => void
}) => {
    return (
        <div className="flex flex-1 h-17 min-w-[260px] items-center justify-between px-4 py-2 border-1 border-blue-200 rounded-md text-[14px]">
            <div className="flex items-center gap-2">
                {image && <span>{image}</span>}
                <p>{text}</p>
            </div>
            {
                layout.find(item => item.i === text && item.key === widgetKey) ? (
                    <button onClick={() => setLayout(layout.filter(item => item.key !== widgetKey))} className="items-center cursor-pointer hover:border-blue-400 h-6 w-17 hover:text-blue-400 text-black border-1 border-gray-300 rounded-md">
                        Remove
                    </button>
                ) : (
                    <button onClick={() => setLayout([{i: text, key: widgetKey, x: 0, y: 0, w: 0, h: 0}, ...layout])} className="items-center cursor-pointer hover:border-blue-400 h-6 w-10 hover:text-blue-400 text-black border-1 border-gray-300 rounded-md">
                        Add
                    </button>
                )
            }
        </div>
    )
}
