import Button from './Button';

export default function SideBarNav({ onStartAddProject, onSelectProject, projects, selectedProjectId }) {
  return (
    <aside className="w-1/3 px-8 py-16 flex flex-col bg-stone-900 text-stone-50 rounded-r-xl h-100 md:w-72">
      <h2 className="text-stone-200 md:text-xl font-bold uppercase mb-8">Your Projects</h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <div>
        {projects && projects.length > 0 ? (
          <ul className="text-neutral-400 mt-4">
            {projects.map((project) => {
              let cssClasses = 'w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800';

              if (project.id === selectedProjectId) {
                cssClasses += ' bg-stone-800 text-stone-200';
              } else {
                cssClasses += ' hover:bg-stone-800';
              }

              return (
                <li key={project.id}>
                  <button
                    className={cssClasses}
                    onClick={() => {
                      onSelectProject(project.id);
                    }}
                  >
                    {project.title}
                  </button>
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="text-neutral-400 mt-12">No projects added</p>
        )}
      </div>
    </aside>
  );
}
