import React from 'react'

function withSearch(WrappedComponets) {
    return class EnhancedComponent extends React.Component {
        state = {
            searchValue: ''
        }

        handleKey = (e) => {
            this.setState({ searchValue: e.target.value.toUpperCase() })
        }


        render() {
            return <WrappedComponets handleKey={this.handleKey} searchValue={this.state.searchValue} />
        }
    }
}

export default withSearch