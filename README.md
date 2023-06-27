# server
├─ host
│   └─ src
│        ├─ controllers                      ... 各APIのリクエストを受け付けを担う
│        │   └─ users.controller.ts
│        ├─ interfaces                       ... アプリケーションのインターフェースを格納する
│        │   └─ users.dto.ts
│        ├─ domain
│        │   ├─ entirties                    ... ドメインオブジェクトEntity
│        │   │   └─ users.entity.ts
│        │   └─ repositories                 ... DBアクセスを担う
│        │       └─ users.repository.ts
│        ├─ logger                           ... ログ出力を担う
│        │   └─ logger.service.ts
│        ├─ modules                          ... 依存関係の定義を担う
│        │   └─ users.module.ts
│        ├─ services                         ... ビジネスロジックを担う
│        │   └─ users.service.ts
│        ├─ app.module.ts                    ... アプリケーションのルートモジュール
│        └─ main.ts                          ... アプリケーションのエントリファイル
│
├─ test
│   └─                                       ... 設計中
│
├─ .dockerignore
├─ .eslintrc.js
├─ .gitignore
├─ .prettierrc
├─ .yarnrc
├─ docker-compose.yml
├─ Dockerfile
├─ Makefile
├─ nest-cli.json
├─ package.json
├─ README.md
├─ tsconfig.build.json
├─ tsconfig.json
└─ yarn.lock
