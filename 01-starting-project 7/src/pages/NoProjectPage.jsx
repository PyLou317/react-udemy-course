import noProjectPhoto from '../assets/no-projects.png';
import Button from '../components/Button';

export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="flex flex-col items-center w-2/3 h-full mt-24 text-center">
      <img src={noProjectPhoto} className="w-16 h-16 object-contain mx-auto" alt="Empty task list" />
      <h2 className="my-4 text-stone-500 font-bold text-xl">No Project Selected</h2>
      <p className="text-stone-400 mb-4">Select a project or get started on a new one</p>
      <div className="mt-8">
        <Button onClick={onStartAddProject}>Create new project</Button>
      </div>
    </div>
  );
}
