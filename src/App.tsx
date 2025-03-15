// import { useState } from 'react';
import './App.scss';
import LegoWrapper from './components/LegoWrapper';

function App() {
  // State for LegoWrapper configuration
  // const [color, setColor] = useState('purple');
  // const [pattern, setPattern] = useState<string>('standard');

  return (
    <div className="app-container">
      <h1>LEGO Brick Component</h1>

      <LegoWrapper id="first-brick" studCount={2} color={'orange'} pattern='standard' text='standard' />

      <LegoWrapper id="first-brick" studCount={3} studShape={'round'} pattern='smooth' text='smooth' />
      
      

      <LegoWrapper
        color={'red'}
        fancyText={true}
        title='A RED LEGO Brick Component'
        id="example-brick-2"
        />

      <LegoWrapper
        color={'purple'}
        fancyText={true}
        title='A PURPLE GRID Brick Component'
        id="example-brick-2"
        studCount={5}
        pattern='grid'
        />

      <LegoWrapper
        color={'blue'}
        fancyText={true}
        title='LEGO Round Brick Component'
        studCount={4}
        studShape={'round'}
        id="example-brick"
        text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet lorem non sodales convallis. Nullam
            pharetra eros nibh, id interdum nunc rhoncus in. Fusce commodo urna dui, quis lobortis nisl varius sed. Ut
            placerat convallis ante sit amet blandit. Pellentesque et eleifend nisi. Nam commodo, ligula et pellentesque
            semper, diam velit dignissim eros, elementum congue lacus diam in tellus. Suspendisse eget interdum enim,
            eget iaculis ex. Nullam vehicula massa quis fringilla faucibus. Pellentesque augue purus, elementum eget diam
            vel, dignissim lobortis leo. Mauris pretium sodales bibendum. Nullam eget tellus vitae tortor facilisis vehicula non
            vel ipsum. Aliquam vestibulum nec tortor molestie iaculis.`}
      />

      <LegoWrapper
        color={'yellow'}
        fancyText={false}
        studShape={'hexagon'}
        title='Yellow Component'
        id="example-brick-2"
        />

      <LegoWrapper
        color={'green'}
        fancyText={false}
        studCount={6}
        studShape={'round'}
        title='A RED LEGO Brick Component'
        id="example-brick-2"
        >
          <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet lorem non sodales convallis. Nullam
            pharetra eros nibh, id interdum nunc rhoncus in. Fusce commodo urna dui, quis lobortis nisl varius sed. Ut
            placerat convallis ante sit amet blandit. Pellentesque et eleifend nisi. Nam commodo, ligula et pellentesque
            semper, diam velit dignissim eros, elementum congue lacus diam in tellus. Suspendisse eget interdum enim,
            eget iaculis ex. Nullam vehicula massa quis fringilla faucibus. Pellentesque augue purus, elementum eget diam
            vel, dignissim lobortis leo. Mauris pretium sodales bibendum. Nullam eget tellus vitae tortor facilisis vehicula non
            vel ipsum. Aliquam vestibulum nec tortor molestie iaculis.
          </div>
          <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet lorem non sodales convallis. Nullam
            pharetra eros nibh, id interdum nunc rhoncus in. Fusce commodo urna dui, quis lobortis nisl varius sed. Ut
            placerat convallis ante sit amet blandit. Pellentesque et eleifend nisi. Nam commodo, ligula et pellentesque
            semper, diam velit dignissim eros, elementum congue lacus diam in tellus. Suspendisse eget interdum enim,
            eget iaculis ex. Nullam vehicula massa quis fringilla faucibus. Pellentesque augue purus, elementum eget diam
            vel, dignissim lobortis leo. Mauris pretium sodales bibendum. Nullam eget tellus vitae tortor facilisis vehicula non
            vel ipsum. Aliquam vestibulum nec tortor molestie iaculis.
          </div>
      </LegoWrapper>

      
    </div>
  );
}

export default App;
