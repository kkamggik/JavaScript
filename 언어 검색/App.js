import {fetchLanguages} from './api.js';
import SearchInput from './SearchInput.js';
import Suggestion from './Suggestion.js';
import SelectedLanguage from './SelectedLanguage.js';

export default function App(target) {
    this.state = {
        fetchedLanguages: [],
        selectedLanguages: [],
        selectedIndex: 0
    }

    this.setState = (nextState) => {
        this.state = {
            ...this.state,
            ...nextState
        }
        suggestion.setState({
            selectedIndex: 0,
            items: this.state.fetchedLanguages
        })
        selectedLanguage.setState({
            items: this.state.selectedLanguages
        })
    }

    const selectedLanguage = new SelectedLanguage(target);

    const searchInput = new SearchInput(target, async(value) => {
        if(value.length > 0) {
            const result = await fetchLanguages(value);
            this.setState({fetchedLanguages: result})
        }else{
            this.setState({fetchedLanguages: []})
        }
    })

    const suggestion = new Suggestion(target, (value) => {
        if(!this.state.selectedLanguages.includes(value)){
            this.setState({
                selectedLanguages: [...this.state.selectedLanguages, value]
            })
        }
    })

}