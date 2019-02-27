from flask import Flask,render_template, request


app = Flask(__name__)


@app.route('/')
def index():
    nums = [10, 20]
    return render_template('index.html', nums=nums)


@app.route('/game')
def game():
    card_num=int(request.args.get('card-num'))
    return render_template('game.html', card_num=card_num)


if __name__ == '__main__':
    app.run(debug=True)
