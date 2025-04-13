import styled from "styled-components";
import { Responsive, WidthProvider, Layouts } from "react-grid-layout";
import { Layout } from "./panel-widgets";
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const ResponsiveGridLayout = WidthProvider(Responsive);

const GridItemWrapper = styled.div`
  background: white;
  border-radius: 16px;
  border: 1px solid #e0e0e0;
  position: relative;
  
  .react-resizable-handle {
    background: none;
    &::after {
      content: "";
      position: absolute;
      right: 6px;
      bottom: 6px;
      width: 17px;
      height: 17px;
      border-right: 2px solid gray;
      border-bottom: 2px solid gray;
      border-radius: 0 0 12px 0;
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 13px;
  right: 13px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #e0e0e0;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 14px;
  color: #666;
  transition: all 0.2s;
  z-index: 10;

  &:hover {
    background: #f5f5f5;
    border-color: #ccc;
    color: #333;
  }
`;

const GridItemContent = styled.div`
  padding: 16px;
  height: 100%;
`;

const Root = styled.div`
  width: 100%;
`;

const getLayouts = ({layout}: {layout: Layout[]}) => {
  const savedLayouts = localStorage.getItem("grid-layout");
  return savedLayouts ? JSON.parse(savedLayouts) : { lg: layout };
};

export const WidgetComponents = ({layout, setLayout}: {layout: Layout[], setLayout: (layout: Layout[]) => void}) => {
  const handleLayoutChange = (layout: Layout[], layouts: Layouts) => {
    localStorage.setItem("grid-layout", JSON.stringify(layouts));
  };

  const handleRemoveWidget = (e: React.MouseEvent, widgetKey: number) => {
    e.stopPropagation();
    setLayout(layout.filter(item => item.key !== widgetKey));
  };

  return (
    <Root>
      <ResponsiveGridLayout
        className="layout"
        layouts={getLayouts({layout})}
        breakpoints={{ lg: 4, md: 3, sm: 2, xs: 1, xxs: 0 }}
        cols={{ lg: 4, md: 3, sm: 2, xs: 1, xxs: 1 }}
        rowHeight={150}
        containerPadding={[0, 0]}
        margin={[15, 15]}
        isDraggable={true}
        isResizable={true}
        onLayoutChange={handleLayoutChange}
      >
        {layout.map((item) => (
          <GridItemWrapper key={item.i}>
            <CloseButton 
              onClick={(e) => handleRemoveWidget(e, item.key)}
              onMouseDown={(e) => e.stopPropagation()}
            >
              ×
            </CloseButton>
            <GridItemContent>
              {item.i}
              <p className="text-sm mt-7 text-gray-500">Task</p>
            </GridItemContent>
          </GridItemWrapper>
        ))}
      </ResponsiveGridLayout>
    </Root>
  );
};