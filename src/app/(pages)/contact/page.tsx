export default function ContactPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-6xl font-bold mb-8">
        Contact | 問い合わせ
      </h1>

      <p className="mb-8 leading-relaxed">
        お問い合わせは下記のフォームよりお願いいたします。
        すべてのお問い合わせに必ず対応するものではございません。
        <br />
        <span className="text-red-600">*</span>
        は必須項目です。
      </p>

      <div className="w-full h-px bg-gray-300 mb-12" />

      <form
        action="mailto:kenji.okuda@nsw.co.jp"
        method="post"
        encType="text/plain"
        className="space-y-6"
      >
        <FormRow
          id="name"
          label="名前"
          required
        >
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="山田 太郎"
            className="input"
          />
        </FormRow>

        <FormRow
          id="furigana"
          label="フリガナ"
        >
          <input
            id="furigana"
            name="furigana"
            type="text"
            placeholder="ヤマダ タロウ"
            className="input"
          />
        </FormRow>

        <FormRow
          id="email"
          label="メールアドレス"
          required
        >
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="yamada@example.com"
            className="input"
          />
        </FormRow>

        <FormRow
          id="tel"
          label="電話番号"
        >
          <input
            id="tel"
            name="tel"
            type="tel"
            placeholder="09012345678"
            className="input"
          />
        </FormRow>

        <FormRow
          id="subject"
          label="件名"
          required
        >
          <input
            id="subject"
            name="subject"
            type="text"
            required
            placeholder="件名"
            className="input"
          />
        </FormRow>

        <FormRow
          id="body"
          label="お問い合わせ内容"
          required
          alignTop
        >
          <>
            <textarea
              id="body"
              name="body"
              rows={8}
              maxLength={500}
              required
              className="input resize-none"
            />
            <p className="mt-1 text-sm text-gray-500">
              500文字以内で入力してください。
            </p>
          </>
        </FormRow>

        <div className="flex justify-center pt-4">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-10 rounded-lg transition"
          >
            送信
          </button>
        </div>
      </form>
    </main>
  );
}

type FormRowProps = {
  id: string;
  label: string;
  required?: boolean;
  alignTop?: boolean;
  children: React.ReactNode;
};

function FormRow({
  id,
  label,
  required = false,
  alignTop = false,
  children,
}: FormRowProps) {
  return (
    <div
      className={`flex flex-col sm:flex-row ${!alignTop ? "sm:items-center" : ""
        }`}
    >
      <label
        htmlFor={id}
        className="sm:w-1/5 font-bold sm:text-right pr-4 mb-2 sm:mb-0"
      >
        {label}
        {required && (
          <span className="text-red-600"> *</span>
        )}
      </label>

      <div className="w-full sm:w-2/3">
        {children}
      </div>
    </div>
  );
}
