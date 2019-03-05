use libremexre::errors::log_err;
use mpisa::{Error, State};
use std::{path::PathBuf, process::exit};
use structopt::StructOpt;

fn main() {
    let options = Options::from_args();
    options.start_logger();
    if let Err(err) = run(options) {
        log_err(&err);
        exit(1);
    }
}

fn run(options: Options) -> Result<(), Error> {
    let mut state = State::from_config_file(&options.input_file)?;
    loop {
        state.step();
    }
}

#[derive(Debug, StructOpt)]
#[structopt(raw(setting = "::structopt::clap::AppSettings::ColoredHelp"))]
pub struct Options {
    /// Turns off message output.
    #[structopt(short = "q", long = "quiet")]
    quiet: bool,

    /// Increases the verbosity. Default verbosity is warnings and higher to syslog, info and
    /// higher to the console.
    #[structopt(short = "v", long = "verbose", parse(from_occurrences))]
    verbose: usize,

    /// The input file.
    #[structopt(parse(from_os_str))]
    pub input_file: PathBuf,
}

impl Options {
    fn start_logger(&self) {
        stderrlog::new()
            .quiet(self.quiet)
            .timestamp(stderrlog::Timestamp::Second)
            .verbosity(self.verbose + 1)
            .init()
            .unwrap()
    }
}
