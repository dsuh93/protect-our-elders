import english from './english_util';
import simplifiedChinese from './simplified_chinese_util'
import traditionalChinese from './traditional_chinese_util'
import spanish from './spanish_util'
import tagalog from './tagalog_util'
import korean from './korean_util'
import vietnamese from './vietnamese_util';
import japanese from './japanese_util';


const languages = {
    'English': english,
    'Spanish':spanish,
    'Simplified Chinese': simplifiedChinese,
    'Traditional Chinese': traditionalChinese, 
    'Korean': korean, 
    'Japanese': japanese, 
    'Tagalog':tagalog,
    'Vietnamese':vietnamese
}


export default languages;