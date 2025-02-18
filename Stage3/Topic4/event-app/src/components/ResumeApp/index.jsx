import { useState } from 'react';
import ResumeGenerate from './ResumeGenerate';
import ResumePreview from './ResumePreview';

import styles from './resume.module.css';

function ResumeApp() {
  const [settings, setSettings] = useState({
    textAlign: 'left',
  });

  const [data, setData] = useState({
    img_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqafzhnwwYzuOTjTlaYMeQ7hxQLy_Wq8dnQg&s',
  });

  return (
    <div>
      <h1>ResumeApp</h1>

      <div className={styles.container}>
        <ResumeGenerate setData={setData} />
        <ResumePreview user={data} settings={settings} />
      </div>
    </div>
  );
}

export default ResumeApp;
