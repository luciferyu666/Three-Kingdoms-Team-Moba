# python/app.py

from flask import Flask, request, jsonify
from simulate_battle import simulate_battle, General, Tactic, Book

app = Flask(__name__)

@app.route('/simulate-battle', methods=['POST'])
def handle_simulate_battle():
    data = request.json
    team1 = data['team1']
    team2 = data['team2']

    # 將JSON數據轉換為General, Tactic, Book實例
    generals1 = [General(**gen) for gen in team1['generals']]
    tactics1 = [Tactic(**tac) for tac in team1['tactics']]
    books1 = [Book(**book) for book in team1['books']]
    
    generals2 = [General(**gen) for gen in team2['generals']]
    tactics2 = [Tactic(**tac) for tac in team2['tactics']]
    books2 = [Book(**book) for book in team2['books']]

    # 進行對戰模擬
    result = simulate_battle(
        {'generals': generals1, 'tactics': tactics1, 'books': books1},
        {'generals': generals2, 'tactics': tactics2, 'books': books2}
    )

    # 返回結果
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)
