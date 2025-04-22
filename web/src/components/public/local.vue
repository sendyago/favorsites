<script>
    const lbh = [' En ','中文', '日本語'],
        themeLight= ['淺色', 'Light', '明色'],
        themeDark= ['深色', 'Dark', '暗い'],
        themeAuto= ['自動', 'Auto', '自動'],
        updateMemo= ['更新說明', 'Update Infomation', ''],
        lb = ['登入', 'Sign In', 'ログイン']
        , lob = [' 登 出', ' Log Out', 'サインアウト']
        , tb11 = ['收藏夾', 'Favor sites', '個人コレクション']
        , tb12 = ['重要', 'Important', '重要']
        , bsort = [' 排序', ' Sort', ' 選別']
        , bdel = [' 刪除', ' Del', ' 削除']
        , bedit = [' 編輯', ' Edit', ' 編集']
        , bnew = [' 添加', ' New', ' 追加']
        , bshare = [' 分享',' Share', ' シェア']
        , ns = [' 新建...', ' New...', '新しい..']
        , addt = ['创建於', 'Created on ', '作成日']
        , bcancel = ['取消', 'Cancel', 'キャンセル']
        , bdone = ['操作完成，窗口將在 1 秒後關閉：）', 'Well done! It will close in 1 second.', '操作が完了しました。このウィンドウは 1 秒後に閉じます']
        , berror = ['抱歉，遇到故障！請稍候再試。', 'Sorry, something wrong! Please try again later.', '申し訳ありませんが、不具合が発生しました! 後でもう一度試してください']
        , wdone = ['正在保存，請稍候...', 'Saving, please hold on...', '保存中です。お待​​ちください']
        , dst = ['删除網址信息', 'Delete website', 'サイト情報を削除する'], 
        mst = ['转移網址信息', 'Move/Add to...','サイト情報を転送する'], 
        mstc = ['将此網址转移至收藏夾：', 'Move to a category: ','このサイトをお気に入りに移動:']
        , msti = ['將此網址添加至“重要”快捷列表。', 'Add to Important (Fast to click).','このサイトを「重要」クイック リストに追加します。']
        , sus2 = ['登入成功，頁面即將刷新', 'Well done! The page will be refresh right now.','ログイン成功！ ページが更新されようとしています。'],
        setpass= ['設置密碼', 'Setting Password', 'パスワードを設定してください'],
        lt = ['在瀏覽器之間同步數據', 'Sync data among browsers'],
        lr = ['註冊', 'Sign Up'],
        fgtp= ['忘記密碼？','Forget password?'],
        forgetTitle= ['設置新密碼','Reset password'],
        sendEmail= ['發送電子郵件用以重置密碼', 'Send email for reset password'],
        bclose= ['關閉','Close'],
        googlelg = ['使用谷歌登入', 'Sign in with Google'],
        fblg = ['使用臉書登入', 'Sign in with Facebook'],
        logoo = ['或', 'OR'],
        loge = ['電子郵件', 'Email'],
        logp = ['密碼', 'Password'],
        logd = ['還沒有Favorsites帳號嗎？', 'New to Favorsites?'],
        suoc = ['請輸入驗證碼', 'Please enter the verification code'],
        vrcode= ['驗證碼的長度不正確', 'The length of verification code is incorrect.'],
        sunc = ['換一張', 'New Code'],
        suw2 = ['請輸入你的電子郵件帳號', 'Please enter your email account'],
        suw3 = ['請輸入密碼', 'Please enter a password'],
        suw4 = ['電子郵件的格式不正確', 'It\'s not a good email address.'],
        suw5 = ['密碼中不可包含空格', 'The password may not include spaces.'],
        suw8 = ['電子郵件長度不能超過100個字符', 'The email may not more than 100 characters.'],
        suw10 = ['請輸入驗證碼', 'Please enter the verification code'],
        sendOk= ['郵件已發送，請查詢郵箱', 'The mail has been sent, please check your mailbox.'],
        oldPassHolder=['請輸入舊的密碼', 'Please enter the old password.'],
        newPassHolder=['請輸入新密碼', 'Please enter the new password.'],
        newPass2Holder=['請再次輸入新密碼', 'Please enter the new password again.'],
        expainInfo=['使用第三方賬號註冊的用戶，首次無需輸入舊密碼。 密碼設置成功後，即可使用郵箱賬號和密碼登入。', 'Users registered with a third-party account do not need to enter the old password for the first time. After the password is set successfully, you can log in with the email account and the password.'],
        winTitle=['設置密碼', 'Setting Password'],
        bsave =['保存', 'Save'],
        verifyInfo=['信息驗證中，請稍候...', 'Verifying...'],
        notMatch=['兩次輸入的密碼不一致', 'The two passwords do not match'],
        badOldPass=['舊密碼輸入不正確', 'The old password is incorrect.'],
        avatarUrlName=['輸入一個圖片URL作為頭像', 'Enter a URL as the avatar'],
        avatorIconName=['或選擇一個頭像', 'Or select one avatar'],
        headImgTitle=['設置頭像', 'Set Avatar'],
        swarn3 =['請輸入一個有效的圖片網址', 'Please enter a valid url of image'],
        urlErr=['圖片網址長度不能大於500個字符', 'Sorry, the url cannot exceed 500 characters.'],
        googlesu=['使用 Google 註冊', 'Continue width Google'],
        fbsu=['使用 Facebook 註冊', 'Continue with Facebook'],
        logn=['昵稱（5 ~ 20個字符，漢字占2個字符）', 'Nickname(5 ~ 20 characters)'],
        sutli=['已經是Favorsites的用戶？', 'Already on Favorsites?'],
        sus1=['註冊成功！', 'Well done!'],
        suw1=['請輸入昵稱', 'Please input the nickname'],
        suw6=['密碼的長度不能少於6個字符。', 'The password may not less than 6 characters.'],
        suw7=['密碼長度不能超過30個字符。', 'The password may not more than 30 characters.'],
        suw9=['昵稱長度不能超過15個字符。', 'The nickname may not more than 15 characters.'],
        suw12=['昵稱不能含有特殊字符，請重新輸入。', 'Nickname may not contain special characters.'],
        nst=['添加新網址', 'New website'],
        dct=['確定要刪除這個站點嗎？', 'Are you sure?'],
        nsn=['請輸入名稱（限200個字符）', 'Enter a name(No more than 200 characters)'],
        nss=['請輸入網站（限500個字符）', 'Enter a url of website(No more than 500 characters)'],
        swarn1=['請輸入一個名稱。', 'Please enter a name of website.'],
        swarn2=['輸入的名稱長度不能超過200個字符。', 'Sorry, the website name cannot exceed 200 characters.'],
        swarn4=['輸入的網址長度不能超過500個字符。', 'Sorry, the url cannot exceed 500 characters.'],
        dsave=['確定', 'Yes, I am sure'],
        dwait=['刪除中，請稍候...', 'Deleting, please hold on...'],
        ddone=['刪除成功，窗口即將關閉：）', 'Deleted! It will close in 1 second.'],
        bsel=['請選擇...', 'Please select...'],
        bselone=['請選擇一個目標類別', 'Please select the target category to save.'],
        authFailed=['授權失敗，請稍候再試', 'Authorization failed, please try again later'],
        logp1=['請輸入密碼', 'Please enter the new password'],
        logp2=['請再次輸入密碼', 'Please enter the password again'],
        notSame=['兩次輸入的密碼不一致', 'The two passwords are not the same.'],
        lengthErr=['密碼長度至少需要6個字符','Password length needs to be 6 characters at least'],
        resetTitle=['重置密碼', 'Reset password'],
        errMsg1=['信息有誤，請稍候重試。', 'The information is incorrect, please try it later.'],
        commitBtn=['提交', 'Commit'],
        successInfo=['密碼重置成功', 'Password reset is successful.'],
        ac=['添加類別', 'Add new category'],
        ec =['編輯類別', 'Edit the category'],
        cwarn1 =['請輸入類別名稱，並選擇一個類別圖標。', 'Please enter a name of category.'],
        cwarn2 =['抱歉，類別名稱不能超過20個字符。', 'Sorry, the category name cannot exceed 20 characters.'],
        bsure =['確定（無法撤銷）', 'Yes(Can not be rollback)'],
        deleting=['正在刪除，請稍候...', 'Deleting...'],
        cwarn3 =['請選擇類別的圖標。', 'Please select an icon of the category.'],
        dc =['刪除類別', 'Delete the category'],
        dct11 =['刪除此類別，以及此類别下的', 'Delete the category, and the '],
        dct12 =['個網站。', ' websites.'],
        dct21 =['刪除此類別，並將此類別下的', 'Delete the category, and move the '],
        dct22 =['個網站轉存至', 'websites to '],
        tciderr=['目標類別信息有誤，請稍候重試', 'Target Category is wrong, please try again later.'],
        defaultCategoryNames=[['美食','購物','休閒娛樂','運動健身','電子訊息','汽車相關','生活','出行','學習','某天'],
            ['Food','Shopping','Fun','Active Life','Digitizing','Automotive','Home','Travel','Work','Someday'],
            ['食べ物','買い物','レジャー','スポーツ','情報','車','ライフ','トラベル','勉強','いつか']]

    export default {
        lbh,themeLight,themeDark,themeAuto,updateMemo,lb,lob,tb11,tb12,bsort,bdel,bedit,bnew,bshare,
        ns,addt,bcancel, bdone, berror, wdone, dst, mst, mstc, msti,sus2, setpass, lt, lr, fgtp,
        forgetTitle,sendEmail,bclose,googlelg,fblg,logoo,loge,logp,logd,suoc,vrcode,sunc,suw2,suw3,
        suw4,suw5,suw8,suw10,sendOk, oldPassHolder,newPassHolder, newPass2Holder, expainInfo, winTitle,
        bsave, verifyInfo, notMatch, badOldPass,avatarUrlName,avatorIconName, headImgTitle, swarn3,
        urlErr, googlesu, fbsu, logn, sutli, sus1, suw1, suw6, suw7, suw9, suw12, nst, dct, nsn, nss,
        swarn1, swarn2, swarn4, dsave, dwait, ddone, bsel, bselone, authFailed, logp1, logp2,notSame,
        lengthErr, resetTitle, errMsg1, commitBtn, successInfo, ac, ec, cwarn1, cwarn2, bsure, deleting,
        cwarn3, dc, dct11, dct12, dct21, dct22, tciderr, defaultCategoryNames
    }
</script>