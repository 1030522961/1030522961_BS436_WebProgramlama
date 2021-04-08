import React, {Component} from 'react';

class Home extends Component {
    render() {
        return (
<div>
                <h2>Quiz oyunu</h2>
                <p className="welcome-text">
                quiz oyununa hoş geldiniz oyunda 4 şıktan olusan bır dızı sorular soracağız.
                yanlızca bırı doğrudur. soruyu yanlıs cevaplarsanız yenilirsiniz.doğru cevaplamaya dıkkat etmnelısın</p>
        <div className="action">
            <link className="play" to={"/match"}>oyna</link>
            </div>
</div>
        );
    }
}

export default Home;