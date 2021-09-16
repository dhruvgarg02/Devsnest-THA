const fs = require("fs/promises"); // FileSystem
const program = require("commander");

program.command("mkdir <dirname>").action(async (dirname) => {
  await fs.mkdir(dirname);
});

program.command("rmdir <path>").action(async (path) => {
  try {
    await fs.rmdir(path);
  } catch (err) {
    console.log(err);
  }
});

program
  .command("mkfile <path> <name> <email>")
  .action(async (path, name, email) => {
    await fs.writeFile(path, JSON.stringify({ name: name, email: email }));
  });

program.command("readfile <path>").action(async (path) => {
  const fileContent = await fs.readFile(path);
  console.log(JSON.parse(fileContent));
})

program.command("rename <oldpath> <newpath>").action(async (oldpath, newpath) => {
  await fs.rename(oldpath, newpath); 
});

program.command("rmfile <path>").action(async (path) => {
  await fs.unlink(path);
});

program.parse();
