var task = {
  title: "My task",
  description: "My Description"
};


task.toString = function() {
  return this.title;
};

console.log(task.toString());
