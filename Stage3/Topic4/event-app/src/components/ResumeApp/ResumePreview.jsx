import styles from './resume.module.css';
import PropTypes from 'prop-types';
import { usePDF } from 'react-to-pdf';

function ResumePreview({ user }) {
  const { toPDF, targetRef } = usePDF({ filename: user?.full_name + '.pdf' });

  return (
    <div>
      <button onClick={toPDF}>Export CV</button>
      <div ref={targetRef} className={styles.preview}>
        <img width={200} height={200} src={user.img_url} />
        <h1>{user?.full_name}</h1>
        <h2>Salary:{user?.salary}</h2>
        <h3>{user?.position}</h3>
        <h4>{user?.skills}</h4>
      </div>
    </div>
  );
}

export default ResumePreview;

ResumePreview.propTypes = {
  user: PropTypes.shape({
    img_url: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    full_name: PropTypes.string.isRequired,
    skills: PropTypes.string.isRequired,
  }).isRequired,
};
