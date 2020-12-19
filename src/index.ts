import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

// Create an object that satisfies the 'DataReader' interace
// const csvFileReader = new CsvFileReader('football.csv')

// Create an instance of MatchReader and pass in something satisfying
// the 'DataReader' interface
// const matchReader = new MatchReader(csvFileReader)
const matchReader = MatchReader.fromCsv('football.csv')
matchReader.load()

// const summary = new Summary(
//     new WinsAnalysis('Everton'),
//     // new ConsoleReport()
//     new HtmlReport()
// )

const summary = Summary.winsAnalysisWithHtmlReport('Everton')

summary.buildAndPrintReport(matchReader.matches)